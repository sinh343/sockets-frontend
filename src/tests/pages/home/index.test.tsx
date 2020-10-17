import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from "pages/home";
import { PageURI } from "models/enums";

Enzyme.configure({ adapter: new Adapter() });

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Home Page Component", () => {
    describe("When it mounts", () => {
        it("should render", () => {
            const wrapper = shallow(<Home />);
        });

        describe("it has a button", () => {
            const wrapper = shallow(<Home />);
            const button = wrapper.find("button");

            it("should only have one button", () => {
                expect(button).toHaveLength(1);
            })
            it("should have text", () => {
                expect(button.text()).toEqual("Start!");
            })

            it("navigates to connect4 when pressed", () => {
                button.simulate("click");

                expect(mockHistoryPush).toHaveBeenCalledWith(PageURI.CONNECT4);
            })
        })
    })
})