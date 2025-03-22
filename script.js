const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
            //Add your code here
            let prices = document.querySelectorAll(".price");
            // console.log(prices)
            let total = 0
            for (p of prices) {
                total += + p.innerText;
            }
            console.log(total)

            
            const totalRow = document.createElement("tr");
            const totalValue = document.createElement("td");
            totalValue.setAttribute("id",'ans')
            totalValue.innerText=total
            totalRow.append(totalValue)
            let table=document.querySelector('table')
            table.append(totalRow)
        };

getSumBtn.addEventListener("click", getSum);

