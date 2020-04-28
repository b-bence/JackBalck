let disks = document.querySelectorAll('.disk');
let dropZones = document.querySelectorAll('.tower');

disks.forEach(disk => {

    disk.addEventListener('dragstart', event => {
        console.log('dragstart');
        event.dataTransfer.setData('text', event.target.id);
    });

    // disk.addEventListener('dragend', event => {
    //     disk.classList.remove('dragstart');
    // });

});

dropZones.forEach(dropZone => {

    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
        console.log('dragover')
    });


    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        let list = event.target;
        list.insertBefore(document.getElementById(data), list.childNodes[0]);
        console.log(list.childNodes);
    });
});