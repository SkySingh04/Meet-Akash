import ReactEmbedGist from 'react-embed-gist';
const gistId="6583e1be7b05b818df7d5b224b37df67"
const username="SkySingh04"

function Gist (){
    <ReactEmbedGist gist={`${username}/${gistId}`}
       file="1_MergedPR's.MD"
       titleClass='text-5xl font-bold my-4 text-amber-400'
       wrapperClass=' mx-auto'
       />
}

export default Gist;