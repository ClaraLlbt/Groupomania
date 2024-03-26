<script>
//Imports
import axios from 'axios'

import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import Intro from '../views/Intro.vue'

export default {
  components: { Intro },
  name: 'Home',
  data() {
    return {
      // revele: false,
      // disappear: true,
      loaderElement: true,
    }
  },
  created() {
    // this.AlreadyLogin()
    this.notyf = new Notyf({
      duration: 4000,
      position: {
        x: 'center',
        y: 'bottom'
      }
    })
  },
  mounted(){
    setTimeout(() => {
        if(document.readyState != 200){
          console.log("Hello, l'application vient de se lancer");
          this.loaderElement = false;
          const navbar = document.querySelector('.navbar')
          navbar.style.display = ""
        }
      }, 3200);

  },
  methods: {
    //Permet d'afficher le bloc de connexion
    connectForm() {
      ;(this.revele = true), (this.disappear = false)
    }
    // AlreadyLogin() {
    //   const userId = localStorage.getItem('userId')
    //   console.log(userId)
    //   const token = localStorage.getItem('token')
    //   axios
    //     .get('http://localhost:3000/api/users/profile/' + userId, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //       }
    //     })
    //     .then((res) => {
    //       if (res.data.user.token === token) {
    //         this.notyf.success('Ravie de vous revoir si vite')
    //         this.$router.push('/posts')
    //       }
    //     })
    // }
  }
}
</script>

<template>

  <div v-if="loaderElement == true"> <intro/> </div>

  <div v-else-if="loaderElement == false" class="container-fluid">
    <div class="row home-ctr">
      <div class="col-3 aside">
        <div class="row recent-events">
          <h2>Récent</h2>
          <ul class=" rc-events">
            <p class="text-muted">évènements</p>
            <li><i class="bi bi-people-fill"></i> Réunion - MAR, 21 Avril,...</li>
            <li><i class="bi bi-person-video3"></i> Conférence - JEU, 03 Mai,...</li>
          </ul>
          <ul class="rc-other">
            <p class="text-muted">autres</p>
            <li><i class="bi bi-person-fill"></i> Adrien vient de nous rejoindre</li>
          </ul>
        </div>
        <div class="row shortcuts">
        </div>
      </div>
      <div class="col-6 posts">
      
        <!-- CREATE POST -->
        <div class="row create-post">
          <div class="col-9 card">
            <div class="row about-post">
              <div class="col-2 user-pic">
                <i class="bi bi-person-bounding-box"></i>
              </div>
              <div class="col-10 user-post">
                <input class="col-11 content-post" type="post" name="post" placeholder="Quoi de neuf dans la boîte ?..." />
                <button class="col-1 post-message btn"><i class="bi bi-send-arrow-down"></i></button>
              </div>
            </div>
            <div class="row btn-tools">
              <div class="col-4"><i class="bi bi-card-image"></i> Image</div>
              <div class="col-4"><i class="bi bi-camera-video"></i> Vidéo</div>
                
            </div>
          </div>
        </div>
        

        <!-- USERS POSTS -->
        <div class="row users-posts">
          <!-- USE SLOTS  -->
          <div class="card col-9">
            <div class="card-header">
                <div class="col-1 user-pic">
                  <i class="bi bi-person-circle"></i>
                </div>
                <span class="col-10 user">
                  <h4 class="name">Clara Llbt</h4>
                  <p>Il y a 8h</p>
                </span>
                <div class="btn-group dropdown">
                  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-list"></i></button>
                  <div class="dropdown-menu">
                    supprimer
                  </div>
                </div>
            </div>
            <div class="img-top"></div>
            <div class="card-footer">
              <div class="col-4 like"><i class="bi bi-heart"></i></div>
              <div class="col-4 comment"><i class="bi bi-chat-square-text"></i></div>
              <div class="col-4 share"><i class="bi bi-share"></i></div>
            </div>
          </div>

        </div>
    
      </div>
      <div class="col-3 events">
        <h2>Évènements <i class="bi bi-plus-circle"></i></h2>
        <div class="row">
          <div class="card col-5">
            <div class="card-header">
              <i class="bi bi-people-fill"></i>
            </div>
            <div class="card-body">
              <p class="title">Réunion</p>
              <p class="date">MAR, 21 Avril, A 8H</p>
              <span class="dscpt">
                Réunion pour la conception du site web de l'entreprise
              </span>
            </div>
          </div>
          <div class="card col-5">
            <div class="card-header">
              <i class="bi bi-person-video3"></i>
            </div>
            <div class="card-body">
              <p class="title">Conférence</p>
              <p class="date">JEU, 03 MAI, A 13H</p>
              <span class="dscpt">
                Conférence sur le plan de 
              </span>
            </div>
          </div>
          <div class="card col-5">
            <div class="card-header">
              <i class="bi bi-people-fill"></i>
            </div>
            <div class="card-body">
              <p class="title">Réunion</p>
              <p class="date">MAR, 21 Avril, A 8H</p>
              <span class="dscpt">
                Réunion pour la conception du site web de l'entreprise
              </span>
            </div>
          </div>
          <div class="card col-5">
            <div class="card-header">
              <i class="bi bi-people-fill"></i>
            </div>
            <div class="card-body">
              <p class="title">Réunion</p>
              <p class="date">MAR, 21 Avril, A 8H</p>
              <span class="dscpt">
                Réunion pour la conception du site web de l'entreprise
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
.home-ctr{margin: 20px 0;};
.aside{
  .rc-events, .rc-other{
    list-style: none;
    width: 80%;
    p{
      color: gray;
      font-weight: 500;
      margin: 0;
    }
    li{
      &:hover{
        background: #EEEEEE;
      }
    }
  };
}
.posts {
  .create-post, .users-posts{
    justify-content: center;
    margin: 20px 0;
  }
  .create-post {
    
    .card {
      padding: 20px;
      .about-post{
        .user-pic{ 
          display: flex;
          i{ 
            margin: auto;
            font-size: xx-large;
          }
        }
        .user-post{
          display: flex;
          align-items: center;
          .content-post, .post-message{
            padding:5px;
            border-radius: 7px;
            border: none;
            background: #EEEEEE;
            height: 40px;
          }
          .content-post{
            margin: 15px 0;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            color: gray;
            font-weight: bold;
            padding: 5px;
            &::placeholder{ 
              color: #00A8DD;
              font-weight: bold;
            }
          }
          .post-message{
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            i{ 
              font-size: x-large;
            }
          }
        }
      }
      .btn-tools{
        align-items: center;
        text-align: end;
        justify-content: flex-end;
        i{ 
          font-size: large;
        }
      }
    }
  }
  .users-posts{
    .card {
      padding: 0;
      .card-header{
        padding: 0;
        display: flex;
        .user-pic{ 
          font-size: xx-large;
          text-align: center;
        }
        .user{
          align-self: flex-end;
          p{ 
            margin:0;
            font-size: small;
            color: gray;
            position: relative;
            bottom: 5px;
          }
          .name{ 
            font-size: large;
            font-weight: 500;
            margin: 0;
          }
        }
      }
      .img-top{
          background: url('../assets/images/home-logo.png');
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: center;
      }
      .card-footer{
        display: flex;
        text-align: center;
        padding: 0;
        .like, .comment, .share{
          padding: 10px;
          &:hover{
            background: #EEEEEE;
          }
          i{
            font-size: large
          }
          .bi-heart:hover::before, .bi-heart:focus::before{
            content: "\F415";
          }
        }
      }
    }
  }
};
.events{
  h2{ margin-left: 10px;}
  .row {
    justify-content: space-evenly;
    .card{
      padding: 0;
      margin: 10px 0;
      &:hover{
        background: #EEEEEE;
        cursor: pointer;
      }
      .card-header{
        display: flex;
        padding: 0;
          i {
            font-size: xxx-large;
            margin: auto;
          }
      }
      .card-body{
        p{ margin: 0;}
        .title{
          font-size: 20px;
          font-weight: 600;
          color: #00A8DD;
        }
        .date{ 
          font-size: 11px;
          font-weight: 600;
          color: gray;
        }
        .dscpt{
          font-size: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: justify;
        }
      }
    }
  }
};
</style>
