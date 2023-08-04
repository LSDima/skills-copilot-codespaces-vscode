function skillsMember() {
  const skills = new Skills({ token: process.env.SKILLS_TOKEN });
  const member = skills.member(process.env.SKILLS_MEMBER_ID);
  return member;
}