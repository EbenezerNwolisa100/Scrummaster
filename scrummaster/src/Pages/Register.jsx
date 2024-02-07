import React from 'react'
import '../Styles/Forms.css'
import { Link } from 'react-router-dom'

function Register() {

    return (
        <>
            <section class="head-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12" id="img-side">
                            <div class="texts">
                                <h1>The Best Scrum Experience</h1>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12" id="form-side">
                            <h3 class="join">Join for the <br />Best Scrum Experience</h3>
                            <p class="form-p">Sign up to embark on an unforgettable learning experience.</p>
                            <div class="container" id="form1">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Username</label><br />
                                            <input type="text" name="username" class="form-control"/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Email Address</label><br />
                                            <input type="email" name="email" class="form-control"/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Phone Number</label><br />
                                            <input type="number" name="phone_number" class="form-control"/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Password</label><br />
                                            <input type="password" name="password" class="form-control"/>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                By signing up, you agree to our Terms and Conditions.
                                            </label>
                                        </div>
                                        <div class="centered-btns">
                                            <button class="submit-btn" type='submit'>Sign Up</button>
                                            <p class="already-signed">Already registered? <Link to='/Login'>Login</Link></p>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register