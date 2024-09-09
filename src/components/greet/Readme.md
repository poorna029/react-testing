

## Test Driven Development (TDD) / Red-Green Testing 
1 . make tests fail first by giving wrong input to check the test case functioning properly </br>

2 . make tests pass by giving valid input to check the test case functioning properly </br>

3 . if possible refactor the code to run in efficient way  </br>

## Testing options 

4 . what is watch mode is , it watches the changes from last commit and when you run ```yarn test or npm test``` </br> 
    it runs the test cases related changed files . </br>

5 . jest gives search options with file name regex pattern , using ``` p option ``` and use arrow keys </br>

6 . jest also gives test based search regex pattern , using ``` t option ``` and using arrow keys </br>

## test methods

7 . jest alo gives two methods , one is -> ```test.only("name",()=>{}) ``` to test only specific test </br>
                               , sec is -> ```test.skip("name",()=>{}) ```  to skip specific test </br>

## describe method

8 . jest provides | describe method | to group test cases - ```describe("group_name", group of test cases within a funciton block ) ```  </br> 

9 . to filter on describe method , we can use ```describe.only()``` and ```describe.skip()```</br>

10 . we can nest inside describe method , so that you can create sub groups </br> 

## test method alternatives 

11 . one suite corresponds to one file not based on different test groups or describe methods or test methods </br>

12 . we have alternate method to ``` test() || it()``` and ```test.only() || fit()``` and  ```test.skip() || xit()```</br> 

## common file naming conventions 

13 . testing components have filing conventions accepted are : </br>
       1 . AppComponentName.test.tsx || AppComponentName.test.js convention </br>
       2 . AppComponentName.spec.tsx || AppComponentName.spec.js convention </br>
       3 . files within __tests__ folder , which have .tsx || .js extensions </br> 
