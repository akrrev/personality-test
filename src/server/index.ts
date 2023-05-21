import { createServer } from "miragejs"
import { Question } from "./types.ts";
import { questions } from "./mock-data.ts";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = 'api';

      /**
       * Returns the personality test questions.
       */
      this.get('/questions', (): Question[] => questions);
    }
  });
}
