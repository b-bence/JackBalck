// let disks = document.querySelectorAll('.disk');
let disks = [];
let dropZones = document.querySelectorAll('.tower');

selectFirstDisk();
addListener();


function selectFirstDisk() {
    disks = [];
    for (let i = 0; i < dropZones.length; i++) {
        let zone = dropZones[i];
        if (zone.firstElementChild !== null) {
            disks.push(zone.firstElementChild);
        }
    }
}


function removeListener() {
    disks.forEach(disk => {
        disk.removeEventListener('dragstart', dragStart)
        });
}


function addListener() {
    disks.forEach(disk => {
        disk.addEventListener('dragstart', dragStart);
    });
}


function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}


dropZones.forEach(dropZone => {

    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
    });

    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.dataTransfer.clearData("text");
        let list = event.target;
        if (event.target.getAttribute('class') === 'tower')
            list.insertBefore(document.getElementById(data), list.childNodes[0]);
        console.log(list.childNodes);
        removeListener();
        selectFirstDisk();
        addListener()

    });
});