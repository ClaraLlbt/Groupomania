<script>
import { RouterLink, RouterView } from 'vue-router'

export default { name: 'App' }
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/logo-simple.png" width="35" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button class="nav-link" href="#"><router-link to="/"><i class="bi bi-house-door-fill"></i></router-link></button>
            <div class="dropdown nav-link messages">
              <button class="nav-link message" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-chat-left-dots"></i>
              </button>
              <div class="dropdown-menu">
                <span>Vos Messages<button class="btn"><i class="bi bi-pencil-square"></i></button></span>
                <p>Vos messages s'afficheront ici</p>
              </div>
            </div>
            <button class="nav-link" href="#"><router-link to="/profile"><i class="bi bi-person-circle"></i></router-link></button>
            <button class="nav-link"><i class="bi bi-door-closed-fill"></i></button>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss">
nav {
  .navbar-brand {
    padding: 0;
    margin: 0;
  }
  .navbar-collapse {
    justify-content: flex-end;
    font-size: x-large;
    button {
      margin: 0 15px;
    }
    .dropdown-menu {
      left: -80%;
      width: max-content;
      i{ font-size: x-large;}
      span{ 
        font-weight: 600;
        padding-left: 10px;
        display: flex;
        font-size: medium; 
        align-items: baseline;
        justify-content: space-between;
        button {
          margin: 0;
          position: relative;
          i{ 
            font-size: medium;
            margin: 0;
          }
          &:hover::after{
            content: "Nouveau message";
            position: absolute;
            font-size: 11px;
            width: max-content;
            left: -71px;
            right: 0;
            bottom: -13px;
            background: #EEEEEE;
            padding: 3px;
            border-radius: 100px;
          }
        }
      }
      p{
        font-size:small;
        padding: 15px;
        font-weight: 600;
        color: lightslategray;
      }
    }
  }
}
.img-fluid {
  width: 50%;
}
</style>
