

function merge_list(original_list, to_be_added, to_be_deleted)
{
    let temp_dict = {}
    original_list.forEach(x => temp_dict[x] = 1);
    to_be_added.forEach(element => temp_dict[element] = 1)
    to_be_deleted.forEach(element => {
        if (element in temp_dict) {
            temp_dict[element] = 0          
        }
    }
    )

    temp_list = []
    Object.keys(temp_dict).forEach(function(key) {
        if (temp_dict[key] == 1) {
            temp_list.push(key)
        }
    }
    )


    let answer = temp_list.sort(function(a, b){
        if (a.length == b.length){
            return a < b
        } else {
            return a.length < b.length ? 1 : -1  
        }
    })

    return temp_list
}

Original_List = ['one', 'two', 'three']
Add_List = ['one', 'two', 'five', 'six']
Delete_List = ['two', 'five']

console.log(merge_list(Original_List, Add_List, Delete_List))


