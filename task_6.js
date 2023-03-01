const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                },
                {
                    value: 5,
                    children: []
                }
            ]
        },
        {
            value: 3,
            children: [
                {
                    value: 6,
                    children: []
                },
                {
                    value: 7,
                    children: []
                }
            ]
        }
    ]
};

function traverseTree(node) {
    console.log(node.value);
    node.children.forEach(child => {
        traverseTree(child);
    });
}

traverseTree(tree);
