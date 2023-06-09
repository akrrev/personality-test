import { createServer, Response } from 'miragejs'
import { Question } from 'server/types.ts';
import { quiz } from 'server/mock-data.ts';
import { calculatePersonalityTrait } from 'server/validator.ts';

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = 'api';

      /**
       * Returns the personality test questions.
       */
      this.get('/questions', (): Question[] => quiz.questions,
        { timing: 1 }
      );

      /**
       * Gets the result for a submitted test.
       */
      this.get('/test-result', (_schema, { queryParams }) => {
        if (!queryParams.score) {
          return new Response(400, {}, { errors: ['Score is required'] });
        }

        const result = calculatePersonalityTrait(Number(queryParams.score), quiz.minScore, quiz.maxScore);
        if (!result) {
          return new Response(400, {}, { errors: ['Provided data was not valid'] });
        }

        return ({
          trait: result,
          score: queryParams.score,
        });
      }, { timing: 1500 })
    }
  });
}
