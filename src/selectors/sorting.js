import moment from 'moment';

const sortBy = (posts, option) => {
    if(option === 'date') {
        posts.sort((a,b)=>{
           return moment(b.date) - moment(a.date);
        })
    } else if(option === 'title') {
        posts.sort((a,b)=>{
            return a.title > b.title ? 1 : -1;
        });
    }
    return posts;
};

export default sortBy;