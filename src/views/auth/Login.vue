<template>
    <div class="Background">
        <div class="Wrapper">
            <div class="Login-Header">
                <h1>Orchestra Pi</h1>
            </div>
            <div class="Login-Content">
                <form action="">
                    <div class="form-group">
                        <div class="form-control">
                            <input type="text" placeholder="Username">
                        </div>
                        <div class="form-control">
                            <input type="password" placeholder="Password">
                        </div>
                    </div>
                    <button class="btn">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Background{
    background-color: gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Wrapper{
    margin-top: -10vh;
    width: 400px;
    min-height: 270px;
    display: inline-block;
    padding: .5em 2em;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    box-shadow: 10px 12px 30px rgb(47, 47, 47);
}
.Login-Content{
    padding-top: 1em;

    input{
        width: 100%;
        padding: .5em;
        text-align: center;
        box-sizing: border-box;
        font-size: 1em;
        border-radius: 10px;
        border: 1px solid gray;

        &:hover{
            background-color: lightgray;
        }

        &[type="password"]{
            margin-top: .5em;
        }
    }
}
.form-group{
    margin-bottom: 2em;
}
.btn{
    padding: .5em 1em;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: lightgray;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
}
</style>
