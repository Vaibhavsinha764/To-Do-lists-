 function addTask() {
      var input = document.getElementById("taskInput");
      var task = input.value;
      if (task !== "") {
        var li = document.createElement("li");
        li.innerHTML = task + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        document.getElementById("taskList").appendChild(li);
        input.value = "";
      }
    }

    function deleteTask(btn) {
      var li = btn.parentNode;
      li.parentNode.removeChild(li);
    }
  
