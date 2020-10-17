import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from "components/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Socket Button component", () => {
    describe("When it mounts", () => {
        it("should render", () => {
            const wrapper = shallow(<Button />);
        })
    })
})