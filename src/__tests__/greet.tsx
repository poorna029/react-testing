import {render,screen} from "@testing-library/react"
import Greet from '../components/greet/Greet'
test("test greet component",()=>{
   render(<Greet />);
   const ele = screen.getByText("Hello");
   expect(ele).toBeInTheDocument();
});

test("test greet component with name arg",()=>{
   render(<Greet name="Poorna" />);
   const ele = screen.getByText("Hello Poorna");
   expect(ele).toBeInTheDocument();
});