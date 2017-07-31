export class ChannelCard{
    bullets: any = {};
    donut: any = {}

    constructor(bullets: any, donut: any){
        this.bullets = bullets;
        this.donut = donut;
    }

    getBullets(){
        return this.bullets;
    }

    getDonut(){
        return this.donut;
    }

    getChannels(){
        return Object.keys(this.bullets) || [];
    }
}