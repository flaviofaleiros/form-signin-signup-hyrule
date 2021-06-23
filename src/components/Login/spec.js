import React from "react";
import {screen, render} from "@testing-library/react";
import Login from "./index";

describe('Testing render component Login', () => {
    it('should render login title', function () {
        render(<Login />)
        screen.debug();
    });
})
