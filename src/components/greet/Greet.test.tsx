import {render,screen} from "@testing-library/react"
import Greet from './Greet'
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

describe("greet group",()=>{
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
})


describe.only("greet group1",()=>{
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
})


// 

describe.skip("greet group nested hierarchy",()=>{
   test("test greet component",()=>{
      render(<Greet />);
      const ele = screen.getByText("Hello");
      expect(ele).toBeInTheDocument();
   });
   
   describe("greet group3",  ()=>{ 
      test("test greet component with name arg",()=>{
      render(<Greet name="Poorna" />);
      const ele = screen.getByText("Hello Poorna");
      expect(ele).toBeInTheDocument();
   })})
})

