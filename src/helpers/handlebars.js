const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        
        const isValidType = ['asc', 'desc', 'default'].includes(sort.type);
        const sortType = (field === sort.column && isValidType) ? sort.type : 'default';
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };
        
        const icon = icons[sortType];
        const type = types[sortType];

        const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        
        const output = `<a href="${address}">
            <span class="${icon}"></span>
        </a>`;
        
        return new Handlebars.SafeString(output);
    },
};