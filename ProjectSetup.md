# Getting Started with Create React App
# Project Reference 
https://medium.com/@lavitron/make-your-first-call-to-api-using-redux-saga-15aa995df5b6

# Dummy API: 
https://dummyapis.com/dummy/employee?queryParameters=noofRecords%3D10%26idStarts%3D1001

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Install required dependencies 

npm install redux react-redux --save
npm install @reduxjs/toolkit --save
npm install redux-saga --save


# Create store and saga middleware in index.js file and provide store with provider as below

# Create store 
const store = createStore(reducer,InitialState,composeEnhancers(...enhancers), )
# Saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
# Wrap app inside Provider
<Provider store={store}>
    <App />
</Provider>
