export const  middlewareExample = () => next => async action => {

    if (action.type === "CHANGE_PRODUCT_NAME") {
        debugger
        const url = "https://api.github.com/users"
        const response = await fetch(url)
        const responseJson =await response.json()
        if(action.name === ""){
            action.name = responseJson[0].login
        }
    
        
        console.log("middlewareExample called")

    }
    return next(action)
}