import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../redux/store';
import Quiz from '../Quiz';

jest.mock('../../../redux/store', () => ({
  __esModule: true,
  store: {
    getState: () => null,
    subscribe: () => null,
    dispatch: () => null,
  },
}));

jest.mock('../../../redux/api', () => ({
  __esModule: true,
  default: () => null,
  useGetQuestionsQuery: () => ({
    data: [
      {
        id: 1,
        question: 'First question',
        options: [
          {
            id: 1,
            title: 'First option',
            score: 1,
          },
          {
            id: 2,
            title: 'Second option',
            score: 2,
          }
        ],
      },
      {
        id: 2,
        question: 'Second question',
        options: [],
      },
    ],
  }),
}));

test('Renders Quiz component correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
