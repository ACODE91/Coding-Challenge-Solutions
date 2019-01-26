let numUniqueEmails = function (emails) {
  const emailSet = new Set();
  for (const email of emails) {
    let emailArr = email.split('@'); let local_name = emailArr[0]; let 
domain_name = emailArr[1];

    local_name = [].join(local_name.split('+')[0].split('.'));
    const currentEmail = `${local_name }@${  domain_name}`;
    emailSet.add(currentEmail);
  }

  return emailSet.size;
};
