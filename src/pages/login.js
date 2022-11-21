import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { ImTree } from "react-icons/im";
import { BiDna, BiChip } from "react-icons/bi";

// TODO: fix the placement of the icons in the social media signin buttons
function Login(props) {
    const [authMode, setAuthMode] = useState("signin")
    const [focused, setFocused] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [nameFocus, setNameFocus] = useState(false)
    const [seePass, setSeePass] = useState(false)
    const [currColor, setCurrColor] = useState("#8a96a3")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailValid, setEmailValid] = useState(false)
    const [passValid, setPassValid] = useState(false)
    const [nameValid, setNameValid] = useState(false)


    const [hover, setHover] = useState(false)

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const onBlur = () => setFocused(false)
    const onFocus = () => setFocused(true)

    const onBlur2 = () => setEmailFocus(false)
    const onFocus2 = () => setEmailFocus(true)

    const onBlur3 = () => setNameFocus(false)
    const onFocus3 = () => setNameFocus(true)

    const handleChangePass = (e) => {
        let passwordTemp = e.target.value ? true : false;
        let submitValid = emailValid && passwordTemp
        setPassword(e.target.value)

        setPassValid(passwordTemp)
        if (submitValid) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }

    const handleChangeEmail = (e) => {
        let evalid = null;
        if (validateEmail(e.target.value)) {
            evalid = true
        } else {
            evalid = false
        }

        let submitValid = passValid && evalid
        // setEmail(e.target.value)
        setEmailValid(evalid)

        if (submitValid) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }

    const validateEmail = (email) => {
        // console.log(/\S+@\S+\.\S{2,}/.test(email))
        return /\S+@\S+\.\S{2,}/.test(email);
    }

    const handleClick = () => {
        let temp = !seePass
        setSeePass(temp)

        if (temp) {
            setCurrColor("red")
        } else {
            setCurrColor("#8a96a3")
        }

    }

    if (authMode === "signin") {
        return (
            <div style={{ "width": "345px" }}>
                <form>
                    <div>
                        <h6>Log in </h6>
                        <div
                            className="form-group mt-3"
                            style={emailFocus ? { "borderColor": "red", "transition": "0.3s" } : {}}
                        >
                            <label
                                className="required"
                                style={emailFocus ? { "color": "red", "transition": "0.3s" } : { "transition": "0.4s" }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete="on"
                                className="form-input form-control shadow-none"
                                required="required"
                                onBlur={onBlur2}
                                onFocus={onFocus2}
                                // value={email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div
                            className={"form-group mt-4"}
                            style={focused ? { "borderColor": "red", "transition": "0.3s" } : {}}
                        >
                            <label
                                className="required"
                                style={focused ? { "color": "red", "transition": "0.3s" } : { "transition": "0.4s" }}
                            >
                                Password
                            </label>
                            <div className="inputWithButton d-flex">
                                <input
                                    type={seePass ? "text" : "password"}
                                    autoComplete="on"
                                    name="password"
                                    placeholder=" "
                                    required="required"
                                    className="form-input form-control shadow-none"
                                    onBlur={onBlur}
                                    onFocus={onFocus}
                                    value={password}
                                    onChange={handleChangePass}
                                />
                                <i>
                                    <i style={{ "height": "70%", "borderRadius": "50%" }}
                                        className="circle"
                                        onMouseOver={() => {
                                            setHover(true)
                                        }
                                        }
                                        onMouseOut={() => {
                                            setHover(false)
                                            setCurrColor(currColor)
                                        }
                                        }
                                        onClick={handleClick}>
                                        <VscEye
                                            style={
                                                hover ? { "color": "#0091ea" } : { "color": currColor }
                                            }
                                            className="icon"
                                        />
                                    </i>
                                </i>

                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary shadow-none my-4 w-100 py-2 button"
                                style={submitDisabled ? { "backgroundColor": "darkgray" } : {}}
                                disabled={submitDisabled}
                            >
                                LOG IN
                            </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button
                                style={{ "textDecoration": "none", "fontSize": "14px", "border": "none", "backgroundColor": "white" }}
                                className="text-info"
                            >Forgot password?</button>
                            <span className="dot mx-2 mt-1" />
                            <span onClick={changeAuthMode} className="signup">

                                <button
                                    style={{ "textDecoration": "none", "fontSize": "14px", "border": "none", "backgroundColor": "white" }}
                                    className="text-info"
                                >
                                    Sign up for OnlyFams
                                </button>
                            </span>
                        </div>
                        <div className="socialsignin">


                            <button
                                className="btn shadow-none w-100 mt-4 py-2 button tree"
                            >
                                <ImTree style={{ "float": "left", "transform": "rotate(90deg)" }} className="mt-1" />
                                SIGN IN WITH ANCESTRY
                            </button>

                            <button
                                className="btn shadow-none w-100 py-2 mt-3 button dna"
                            >
                                <BiDna style={{ "float": "left" }} className="mt-1" />
                                SIGN IN WITH 23 AND ME
                            </button>

                            <button
                                className="btn shadow-none w-100 mt-3 py-2 button chip"
                            >
                                <BiChip style={{ "float": "left" }} className="mt-1" />
                                SIGN IN WITH COVID MICROCHIP
                            </button>

                        </div>
                    </div>
                </form>
            </div>

        )
    }
    return (
        <div style={{ "width": "345px" }}>
            <form>
                <div>
                    <h6>Create your account</h6>
                    <div
                        className="form-group mt-3"
                        style={nameFocus ? { "border-color": "red", "transition": "0.3s" } : {}}
                    >
                        <label
                            className="required"
                            style={nameFocus ? { "color": "red", "transition": "0.3s" } : { "transition": "0.4s" }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-input form-control shadow-none"
                            required="required"
                            onBlur={onBlur3}
                            onFocus={onFocus3}
                        />
                    </div>
                    <div
                        className="form-group mt-3"
                        style={emailFocus ? { "border-color": "red", "transition": "0.3s" } : {}}
                    >
                        <label
                            className="required"
                            style={emailFocus ? { "color": "red", "transition": "0.3s" } : { "transition": "0.4s" }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="on"
                            className="form-input form-control shadow-none"
                            required="required"
                            onBlur={onBlur2}
                            onFocus={onFocus2}
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div
                        className={"form-group mt-4"}
                        style={focused ? { "border-color": "red", "transition": "0.3s" } : {}}
                    >
                        <label
                            className="required"
                            style={focused ? { "color": "red", "transition": "0.3s" } : { "transition": "0.4s" }}
                        >
                            Password
                        </label>
                        <div className="inputWithButton d-flex">
                            <input
                                type="password"
                                autoComplete="on"
                                name="password"
                                placeholder=" "
                                required="required"
                                className="form-input form-control shadow-none"
                                onBlur={onBlur}
                                onFocus={onFocus}
                                value={password}
                                onChange={handleChangePass}
                            />
                            <i>
                                {/* <i> */}
                                <i style={{ "height": "70%", "borderRadius": "50%" }}
                                    className="circle"
                                    onMouseOver={() => {
                                        setHover(true)
                                    }
                                    }
                                    onMouseOut={() => {
                                        setHover(false)
                                        setCurrColor(currColor)
                                    }
                                    }
                                    onClick={handleClick}>
                                    <VscEye
                                        style={
                                            hover ? { "color": "#0091ea" } : { "color": currColor }
                                        }
                                        className="icon"
                                    />
                                </i>
                            </i>

                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary shadow-none mt-4 mb-2 w-100 py-2 button"
                            style={submitDisabled ? { "backgroundColor": "darkgray" } : {}}
                            disabled={submitDisabled}
                        >
                            SIGN UP
                        </button>
                    </div>
                    <div style={{ "fontSize": "12px", "color": "grey" }} className="px-3 mx-2">
                        By signing up you agree to our <a href="/#" style={{ "textDecoration": "none" }}>Terms of Service</a> and
                        {" "}<a href="/#" style={{ "textDecoration": "none" }}>Privacy Policy</a>, and confirm that you are at least 18 years old.
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-4" style={{ "fontSize": "14px" }}>
                        Already have an account?
                        <span className="mx-2">
                            <button onClick={() => setAuthMode("signin")} style={{ "textDecoration": "none", "color": "", "border": "none", "backgroundColor": "white" }} className="text-info">
                                Log in
                            </button>
                        </span>

                    </div>
                    <div>

                    </div>

                </div>
            </form>
        </div>
    )
}
export default Login;