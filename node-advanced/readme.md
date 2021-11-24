### Node Js Advanced Concepts

------------

##### Async Concepts
- Node js is considered as single Threaded language.
- the event loop is single thread, but there are some functions that can be executed at the same time
- there are three ways to achieve this functionality
	- the threadpool executes some functions simultaneously so that we can achieve multithreaded, some functions are fs, crypto.
	- the are way is to use cluster in nodejs, these ways generate childs of the same node that can be executed in parallel depending on the machine cores available
	- the third ways is web workers, which executes functions in background in web browsers
	
here is the project which contains advanced concepts, like testing with pupeeteer and chromium, mongoDB, and redis for caching queries. Continous integration, with TravisCI and image storage with AWS.

------------


[![image1](https://user-images.githubusercontent.com/91288043/143298788-fabc1a48-367b-44b7-9790-49d8ca0a2c71.png "image1")](https://user-images.githubusercontent.com/91288043/143298788-fabc1a48-367b-44b7-9790-49d8ca0a2c71.png "image1")


------------
[![image2](https://user-images.githubusercontent.com/91288043/143299948-7010079c-d9db-476f-aa51-e6c81e76b27b.png "image2")](https://user-images.githubusercontent.com/91288043/143299948-7010079c-d9db-476f-aa51-e6c81e76b27b.png "image2")

