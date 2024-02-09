

function toDoItemTemplate (data)
{
       return   `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${data.todo}</td>
       <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${data.category}</td>
       <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${data.status}</td>
       <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">${data.start}</td>
       <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">${data.finish}</td>`;   
}
export {toDoItemTemplate};
