##### Jest and testing library
###### TTD (test driven development)

------------

it's a practice for software development that tells
- to write the test before writing the code
- make the test to fail
- write the code
- success the test

------------

###### test types
there are many types of tests
- unit test: tries to test just one funcionality at once
- functional test: refers to test that are not seen by the final user
- integration tests: refers to test that connects different parts of teh program
- 2e2: end-to-end tests refer to tests that covers big flows functionality

------------

###### testing library
uses jest and helps us to interact with dom
- there are elements than helps us in testing library
- use user-event package instead of fireEvent to simulate user interacion(i.e. click button, inputs methods, hover actions)
- in order to get elements in dom and test functionality we can use queries  the main are
	- getByRole (there are different roles i.e. button, checkbox link)
	- getByText(find element name)
	- findByRole(make calls asynchronously, can be used in case of renders that have to wait http request)
	-findByText(the same than findByrole. get elements by text)
- Asserting test can be donde with the next functions expect.
	- toHaveTextcontent((helps as to compare especific content))
	- toBeInTheDocument(decide whether and element exiits in DOM)
	- "not" can be used before any command
	- toHaveLength (expects to compare and array or string)
	- toEqual (compare to elements)
- msw: mock server worker helps us to simulate http request during testing without defining a backend