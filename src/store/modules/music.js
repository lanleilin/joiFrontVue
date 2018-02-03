const state={
    oldRhymeList:[],
    newRhymeList:[{
        title:'joi',
        version:1,
        color:'lightsalmon'
    }]
}
const mutations={
    changeColor(state,rhymePara){
        switch(rhymePara.version){
            case 'forword':state.newRhymeList.version=2
            break
            case 'backword':state.newRhymeList.version=0
            break
            default:state.newRhymeList.version=1
        }
    }
}
const actions={
    changeColor({commit}){
        commit({
            version:'forword'
        })
    }
}