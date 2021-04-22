
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
                completed:false,
                delete:false,
            },
        ],
        newList:'',
        deleteItem:[],
        closeOverlayIcon:false,
        modificaInput:'',
        editIndex:null,

    },
    methods:{

        deletedList(index){

            

            thisItem = this.todos[index];
             this.deleteItem.push(thisItem);

            // console.log(this.deleteItem);
            // console.log(index);

            this.todos.splice(index , 1)

            thisItem.delete = true;
        },
        
        addList(){

            
            if(this.newList !== ''){

                // console.log(this.newList);
                this.todos.push(
                    {
                        text:this.newList,
                        completed:false,
                        delete:false, 
                    } )
            }

            this.newList = ''
            this.$refs.inputList.focus()

        },

        ripristina(){

                if(this.deleteItem.length > 0){

                    this.todos.push(
                        {
                            text:this.deleteItem[0].text,
                            completed:false,
                            delete:false, 
                        } )

                    this.deleteItem.splice(0 , 1)
                }
        },
        closeOverlay(){
            this.closeOverlayIcon = false;
        },
        openOverlayIcon(index){
            this.closeOverlayIcon = true;

            this.editIndex = index;

            this.modificaInput = this.todos[index].text

        
        },
        pushaModifica(){

            this.todos[this.editIndex].text = this.modificaInput;
    
               this.closeOverlayIcon = false;
        },
        anullaModifica(){

            this.modificaInput = this.todos[this.editIndex].text 

        }

    },

});