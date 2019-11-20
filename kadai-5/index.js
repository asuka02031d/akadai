const profile = {
    firstName: 'Asuka' ,
    familyName: 'Tsuji',
    age: 19,
    major: 'Department of Literature',
    hobby: 'Listen to music',
    job: 'nothing',
    families: 'one dog',
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key =  keys[i];
    const value = profile[key];
    const text = "私の"　+ key + "は" + value + "です";
    console.log(text);
}
