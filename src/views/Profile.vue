<script>
//Imports
import axios from 'axios'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

//Importe les composants
    export default {
        name: 'Profile',
        data(){
            return{
            }
        },
     }
</script>

<template>
    <div class="user-page container">
        <div class="banner row">
            <div class="profile-pic">

            </div>
            <div class="dropdown">
                <button class="btn mdf-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-pen"></i></button>
                <ul class="dropdown-menu">
                    <li>Changer la photo de profil</li>
                    <li>Changer la photo de couverture</li>
                </ul>
            </div>
            <div class="row user-tools">
                <button class="btn col-3">EDT</button>
                
                <div class="btn-group col-3" role="group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Mes documents
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mon contrat</a></li>
                    <li><a class="dropdown-item" href="#">Mes fiches de paie</a></li>
                    </ul>
                </div>
                <div class="btn-group col-3" role="group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Mes demandes
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Congés</a></li>
                        <li><a class="dropdown-item" href="#">EDT</a></li>
                        <li><a class="dropdown-item" href="#">Mutation</a></li>
                        <li><a class="dropdown-item" href="#">Autres</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="row about-user">
            <div class="col-4 infos">
                <h1 class="user-name">Clara LLbt</h1>
                <p><i class="bi bi-cake"></i> 13/10/1994</p>
                <ul class="list">
                    <span>Intro</span>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Curabitur gravida arcu ac tortor dignissim convallis aenean et.</li>
                    <hr>
                    <li><i class="bi bi-house-fill"></i> Localisation</li>
                    <li><i class="bi bi-mortarboard-fill"></i> University</li>
                    <li><i class="bi bi-youtube"></i> Fav music </li>

                    <hr>
                    <span>Hobbies</span>
                    <div class="card">
                        <ul class="list">
                            <li><i class="bi bi-palette2"></i></li>
                            <li><i class="bi bi-brush"></i></li>
                            <li><i class="bi bi-book"></i></li>
                            <li><i class="bi bi-controller"></i></li>
                            <li><i class="bi bi-dice-6"></i></li>
                            <li><i class="bi bi-flower1"></i></li>
                            <li><i class="bi bi-airplane"></i></li>
                            <li><i class="bi bi-dribbble"></i></li>
                            <li><i class="bi bi-music-note-beamed"></i></li>
                            <li><i class="bi bi-pencil"></i></li>
                            <li><i class="bi bi-film"></i></li>
                        </ul>
                    </div>
                    <hr>
                    <span style="display: flex">Mes projets en cours... <p style="font-size: 11px"><i class="bi bi-plus-circle"></i> Ajouter un projet</p></span>
                </ul>

            </div>
            <div class="col-8 posts">
                
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
                    <div class="col-4"><i class="bi bi-heart"></i></div>
                    <div class="col-4"><i class="bi bi-chat-square-text"></i></div>
                    <div class="col-4"><i class="bi bi-share"></i></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>


<style lang="scss" scoped>
.user-page{
    .banner{
        background: url('../assets/images/newbanner.webp');
        height: 400px;
        width: 100%;
        background-position: center;
        background-size: cover;
        position: relative;
        .profile-pic{
            background: url('../assets/images/user.png');
            height: 150px;
            width: 150px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            position:absolute;
            bottom: -50px;
            left: 50px;
            border-radius: 100px;
        }
        .mdf-btn{
            float: right;
            border-radius: 100px;
            position: relative;
            right: 10px;
            top: 10px;
            i{ 
                font-size: x-large;
            }
        }
        .user-tools{
            align-content: end;
            justify-content: flex-end;
            background: rgba(0, 168, 221, 0.1294117647);
            height: fit-content;
            align-self: end;
            margin: 0 auto;
            .btn{
                height: 50px;
                color: #00A8DD;
                font-weight: bold;
                position: relative;
                border: none;
                &:hover, &:focus, &:active{
                    background: rgba(0, 168, 221, 0.1294117647);
                    border: none;
                }
            }
        }
    }
    .about-user{
        .infos, .posts{
            padding-top: 100px;
        }
        .infos{ 
            h1,p { margin: 5px 25px;}
            span{ 
                font-size: large;
                font-weight: 600;
                color: gray;
            }
            .list{
                list-style: none;
                li i{ font-size: large;}
            }
            .card{
                padding: 0px;
                
                ul{ 
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 6px;
                    justify-content: flex-start;
                    li{
                        i { 
                            font-size: xx-large;
                            margin: 10px
                        }
                    }

                }
            }
        }
        .posts{
            .card{ 
                margin: auto;
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
                }
            }
        }
    }
}
</style>