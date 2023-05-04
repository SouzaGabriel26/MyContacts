const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const category = await CategoriesRepository.update(name, id);

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
