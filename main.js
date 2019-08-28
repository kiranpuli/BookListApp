const title = document.getElementById('titleinput');
const author = document.getElementById('authorinput');
const addbtn = document.getElementById('addbtn');

const msg = document.getElementById('msg');


//additem

/* <tr>
    <td>testTitle</td>
    <td>testAuthor</td>
    <td>
        <button class="remove text-capitalize btn btn-danger ">remove</button>
    </td>
</tr> */
function msgremove() {
    msg.innerText = '';
    msg.className = '';
}

addbtn.addEventListener('click', addbook);

function addbook() {
    if (title.value == '' || author.value == '') {
        console.log('empty field')
        msg.innerText = '*Please enter all fields';
        msg.className = 'text-white bg-danger text-center';
        setTimeout('msgremove()', 2000);


        // return false;
    } else {
        console.log('book added');
        const newtr = document.createElement('tr');

        const newtitle = document.createElement('td');
        const newauthor = document.createElement('td');
        const newbtn = document.createElement('td');

        // newbtn.className = 'remove text-capitalize btn btn-danger btn-sm';
        // newbtn.innerText = 'remove';
        newtitle.innerText = title.value;
        newauthor.innerText = author.value;
        newtr.appendChild(newtitle);
        newtr.appendChild(newauthor);
        // newtr.appendChild(newbtn);


        const tbody = document.querySelector('tbody');
        const tbodyl = tbody.firstElementChild;
        tbody.insertBefore(newtr, tbodyl);
        console.log(newtr);
        title.value = '';
        author.value = '';
    }

}

const rembtn = document.querySelector('.remove');
rembtn.addEventListener('click', rembook);

function rembook() {
    const last = document.querySelector('tbody').firstElementChild.remove();
}