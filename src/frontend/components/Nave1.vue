<template>
    <nav>
        <div class="logo">
            <img src="../images/logo.png" alt="CANV" class="img-logo">
        </div>

        <div class="icons">
            <div @click="toggleMenu" class="menu">☰</div>
            <ul :style="{ display: isMenuOpen ? 'flex' : 'none' }">
                <li style="animation: enter .4s;"><a href="#">الرئيسبة</a></li>
                <li style="animation: enter .5s;"><a href="#">المزادات</a></li>
                <li style="animation: enter .6s;"><a href="#">الإيجار</a></li>
                <li style="animation: enter .7s;"><a href="#">المجتمعات</a></li>
                <li style="animation: enter .8s;"><a href="#">الوظائف</a></li>
                <li style="animation: enter .9s;"><a href="#">من نحن</a></li>
                <li style="animation: enter 1s;"><a href="#">تواصل معنا</a></li>
            </ul>
        </div>
        <div class="main-controle">

            <div class="controle">&lt;</div>
        </div>
    </nav>
</template>

<style>
nav {
    display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
}


.img-logo {
    height: 70%;
}


nav .icons {
    width: 70%;
    height: 100%;
}

nav .icons ul {
    color: #aaa;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: right;
    text-align: center;
}

nav .icons ul li {
    width: calc(70%/6);
    font-size: 1rem;
    cursor: pointer;
    transition: color .5s;
}

nav .icons ul li:hover {
    color: black;

}

.menu {
    margin-right: 10px;
    cursor: pointer;
    display: none;
}

.main-controle {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
}

@media (max-width: 1040px) {

    nav .icons ul li {
        width: calc(85%/6);
        font-size: 15px;
    }
}

@media (max-width: 840px) {

    nav .icons ul li {
        width: calc(100%/6);
        font-size: 10px;
    }

    nav {
        height: 50px;
    }

    nav .logo {
        margin-right: 10px;
    }
}

nav .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
}

@media (max-width: 540px) {
    nav .icons ul {
        display: none;
        flex-direction: column;
        min-height: 300px;
        justify-content: space-evenly;
        width: 60%;
    }

    nav .icons ul li {
        z-index: 100;
        background-color: #AA1E22;
        width: 100%;
        padding: 15px;
        color: white;
        transition: all .5s;
        position: relative;
    }

    nav .icons ul li:hover {
        color: cadetblue;
        font-weight: bold;
        font-size: .7rem;
    }

    @keyframes enter {
        0% {
            right: -700px;
        }

        50% {
            right: 20px
        }

        100% {
            right: 0px;
        }
    }


    nav .icons {
        width: 100%;
    }

    .img-logo {
        height: 50%;
    }

    .menu {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .main-controle {
        width: 80%;
    }

}
</style>
<script>
export default {
    data() {
        return {
            isMenuOpen: true,
            screenWidth: window.innerWidth,
        };
    },
    mounted() {
        window.addEventListener("resize", this.updateScreenWidth);
        if (this.screenWidth <= 540) {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateScreenWidth);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>