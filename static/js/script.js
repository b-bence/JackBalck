// let disks = document.querySelectorAll('.disk');
let disks = [];
let dropZones = document.querySelectorAll('.tower');

selectFirstDisk();
addListener();

function selectFirstDisk (){
    disks = [];
    for (let i = 0;i<dropZones.length; i++){
        let zone = dropZones[i];
        if (zone.firstElementChild!==null){
            disks.push(zone.firstElementChild);
        }
    }
}

function removeListener (){
    disks.forEach(disk => {
        disk.removeEventListener('dragstart', event => {
            event.dataTransfer.clearData();

        });

        // disk.addEventListener('dragend', event => {
        //     disk.classList.remove('dragstart');
        // });

    });
}

function addListener(){
    disks.forEach(disk => {
        disk.addEventListener('dragstart', event => {
            // console.log('dragstart');
            event.dataTransfer.setData('text', event.target.id);
        });

        // disk.addEventListener('dragend', event => {
        //     disk.classList.remove('dragstart');
        // });

    });
}

dropZones.forEach(dropZone => {

    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
        // console.log('dragover')
    });


    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.dataTransfer.clearData("text");
        let list = event.target;
        list.insertBefore(document.getElementById(data), list.childNodes[0]);
        console.log(list.childNodes);
        removeListener();
        selectFirstDisk();
        addListener()
    });
});