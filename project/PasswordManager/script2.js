function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("password")) || [];
  const showData = document.getElementById("passwordData");
  console.log(data);
  if (data.length <= 0) {
    showData.innerHTML = `<tr>
                <td colspan="3">
                    No Password saved
                </td>
            </tr>`;
    return;
  }
}
