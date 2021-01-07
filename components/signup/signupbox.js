const LoginBox = () => {

    return (
        <div>
            <h1>Log In </h1>
            <form>
            <label>
                Username:
                <input type="text" name="username" />
                </label>
            <label>
                Password:
                <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>Forgot username?</p>
          <p>Forgot password?</p>


        </div>
    )
}
export default LoginBox;