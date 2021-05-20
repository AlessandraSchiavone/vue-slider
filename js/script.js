var app = new Vue (
    {
        el: "#root",
        data: {
            images: [
                "https://img.pixers.pics/pho_wat(s3:700/FO/54/07/10/14/700_FO54071014_834209bded280e7ea099919f8ae86012.jpg,700,424,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,374,jpg)/carte-da-parati-paesaggio-urbano-di-roma-al-tramonto-italia.jpg.jpg",
                "http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Firenze/Firenze_-_Cattedrale_di_Santa_Maria_del_Fiore.jpg",
                "https://www.anteprima24.it/wp-content/uploads/2018/03/napoli-1-1.jpg",
                "https://img.fotocommunity.com/milano-al-tramonto-4d05c3e5-2303-4244-b088-9beddd47146a.jpg?height=1080",
                "https://www.miglioripuzzle.it/wp-content/uploads/2020/04/Puzzle-Paesaggi-Sicilia.jpg",
                "https://www.saporieviaggi.com/wp-content/uploads/2018/04/cinque-terre.jpg"
            ],
            imageIndex:0,
            autoplay: ''
        },
        methods: {           
            nextImage: function(){ 
                clearInterval(this.autoplay);
                this.imageIndex++;
                if(this.imageIndex == this.images.length){
                    this.imageIndex = 0;
                } 
            },
            prevImage: function(){
                clearInterval(this.autoplay);
                this.imageIndex--;
                if(this.imageIndex == -1){
                    this.imageIndex = this.images.length - 1;
                }
                
            }
        }, 
        mounted: function(){
            this.autoplay = setInterval( () => {
                this.imageIndex++;
                if(this.imageIndex == this.images.length){
                    this.imageIndex = 0;
                }
              },3000);
             console.log(autoplay);
        }     
    }
);