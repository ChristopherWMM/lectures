import { defineCodeRunnersSetup } from '@slidev/types'
import { CodeRunnerOutputs } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      const compiler = ctx.options.compiler || 'python313'
      const results = await godboltRequest(code, compiler);
      return results;
    },
    async java(code, ctx) {
      const compiler = ctx.options.compiler || 'java2501'
      const results = await godboltRequest(code, compiler);
      return results;
    }
  }
})

async function godboltRequest(code: string, compiler): Promise<CodeRunnerOutputs> {
    try {
      // Godbolt API URL: https://godbolt.org/api/compilers
      const apiUrl = `https://godbolt.org/api/compiler/${compiler}/compile`;
  
      // Make an asynchronous POST request to the Godbolt API with the code
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // We need to explicitly ask for a JSON response, text is the default
        },
        body: JSON.stringify({
          source: code,
          options: {
            compilerOptions: {"executorRequest": true}, // We want to compile + execute
            executeParameters: {},
          }
        })
      });
  
      // Check if the response is successful
      if (!response.ok) {
        return {
          error: `Bad response: ${response.statusText}`
        };
      }

      // Parse the response as JSON
      const result = await response.json();

      // Extract stdout lines and convert them into CodeRunnerOutputText objects
      const stdout = result.stdout.map((line: any) => ({
            text: line.text
                      // Hack to keep leading whitespace
                      .replace(/ /g, "\u200e ")
                      .replace(/\t/g, "\u200e ".repeat(4)),
        }
      ));

      // Extract stderr lines and convert them into CodeRunnerOutputText objects
      const stderr = result.stderr.map((line: any) => ({
            text: line.text
                      // Hack to keep leading whitespace
                      .replace(/ /g, "\u200e ")
                      .replace(/\t/g, "\u200e ".repeat(4)),
            class: 'text-red-500' // CodeRunnerOutputError's can only render one line - this is the CSS they use to replicate their look
        }
      ));

      if (stderr.length !== 0) {
        return stderr;
      } else if (stdout.length !== 0) {
        return stdout;
      } else {
        return {
          text: ''
        };
      }

    } catch (error) {
      console.error('Failed to execute code:', error);
      return {
        error: `Failed to execute code: ${error.message}`
      };
    }
  }
  