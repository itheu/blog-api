import { CreatePostDto } from './../dtos/CreatePostDto';
import { PostEntity } from "../entities/PostEntity";

export const MockedPosts: CreatePostDto[] = [
    {
        title: 'Some title 1',
        subtitle: 'Sub Titlte 1',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 2',
        subtitle: 'Sub Titlte 2',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 3',
        subtitle: 'Sub Titlte 3',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 4',
        subtitle: 'Sub Titlte 4',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }
];