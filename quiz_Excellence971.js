export default {
  title: "Excellence 971 & Afrique",
  questions: [
$(grep -h "{" quiz_Excellence971.js quiz_Excellence971_part*.js 2>/dev/null | sed 's/export default {/ /g' | sed 's/questions: \[/ /g' | sed 's/title:.*,//g')
  ]
}
