<template>
  <div class="">
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">Planos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comp in companies">
            <td>{{ comp.id }}</td>
            <td>{{ comp.name }}</td>
            <td>{{ comp.status }}</td>
            <td>{{ comp.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src="./list-company.js"></script>
