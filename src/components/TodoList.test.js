import React from "react";
import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import TodoList from './TodoList'

describe('<TodoList /> tests', () => {
    it('renders <Todo />', () => {
      render(<TodoList />);
    });
  });