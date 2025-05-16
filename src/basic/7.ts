
interface PageDetails {
  createAt: Date;
  updateAt: Date;
}


interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: PageDetails;
}


const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};


const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};


console.log('📄 Page 1:');
console.log('Title:', page1.title);
console.log('Likes:', page1.likes);
console.log('Accounts:', page1.accounts.join(', '));
console.log('Status:', page1.status);
if (page1.details) {
  console.log('Created at:', page1.details.createAt.toDateString());
  console.log('Updated at:', page1.details.updateAt.toDateString());
}

console.log('\n📄 Page 2:');
console.log('Title:', page2.title);
console.log('Likes:', page2.likes);
console.log('Accounts:', page2.accounts.join(', '));
console.log('Status:', page2.status);
if (page2.details) {
  console.log('Created at:', page2.details.createAt.toDateString());
  console.log('Updated at:', page2.details.updateAt.toDateString());
} else {
  console.log('Details: — немає інформації');
}