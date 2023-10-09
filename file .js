// function downloadfile(download)
// {
//     setTimeout(() => {
//         download();
//     },2000);
// }
// downloadfile(function())
// {
//     console.log('file download succesfully');
// }
function DownloadFile(url,download)
{
       console.log('file start downloading.......... ')
       setTimeout(() => {
        let path=url.split('/').pop();
        download(path);
    },2000);
}
function CompressFile(path,compress)
{
    console.log('file start compress');
    setTimeout(()=>{x
        const comp=path.split('.')[0]+'.Zip';
        compress(comp);
    },2000);
}
DownloadFile('https://www.facebook.com/profile.jpg',function(path){

    console.log(`file download succesfully ${path}`);
    CompressFile(path,function(comp){
        console.log(`file compressed successfully  ${comp}`);
    })
})
