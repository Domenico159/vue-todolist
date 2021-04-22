
const main = new Vue({

    el:'#main',
    data:{

        todos:[
            {
                text:'Fare l\'evento Call of Duty',
                completed:false,
                delete:false,
            },
            {
                text:'Comprare la nuava scheda video RTX 3090',
                completed:false,
                delete:false,
            },
            {
                text:'Assemblare il PC',
                completed:false,
                delete:false,
            },
            {
                text:'Seguire il corso Boolean',
                completed:false,
                delete:false,
            },
            {
                text:'Fare la live su Twitch',
                completed:true,
                delete:false,
            },
        ],

    },
    methods:{

        deletedList(index){
            this.todos[index].delete = true;
        },

    },

});