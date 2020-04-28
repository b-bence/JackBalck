let disks = document.querySelectorAll('disk')
let dropZones = document.querySelectorAll('drop-zone')

disks.forEach(disk => {

    disk.addEventListener('dragstart', event => {
        dropZones.forEach(disk => {
            disk.classList.add('selected');
        });
    });

    disk.addEventListener('dragend', event => {
        dropZones.forEach(disk => {
            disk.classList.remove('selected');
        });
    });


    disk.addEventListener('dragenter', event => {
        dropZones.forEach(dropZone => {
            dropZone.classList.add('enter');
        });
    });

    disk.addEventListener('dragleave', event => {
        dropZones.forEach(dropZone => {
            dropZone.classList.add('leave');
        });
    });

    disk.addEventListener('drop', event => {
        event.preventDefault();
        if (event.target !== disk.parentNode && event.target !== disk) {
            disk.parentNode.removeChild(disk);
            event.target.appendChild(disk);
        }
    });
});