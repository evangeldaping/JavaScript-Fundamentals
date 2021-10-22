const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const foundIndex = objects.find(function (item) {
    return item.id === 'b';
});
console.log(foundIndex);